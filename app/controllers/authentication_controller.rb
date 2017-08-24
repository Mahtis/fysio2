class AuthenticationController < ApplicationController
  # skip_before_action :authenticate_request

  def authenticate
    if params[:password] == 'salasana'
      render json: { error: "invalid password" }, status: :unauthorized
    else
      command = AuthenticateUser.call(params[:name], params[:password])
      if command.success?
        cookies['auth_token'] = command.result
        render json: { auth_token: command.result, user: User.find_by_name(params[:name]) }
      else
        render json: { error: command.errors }, status: :unauthorized
      end
    end
  end

  def create_oauth
    callback = request.env['omniauth.auth']
    unless User.find_by_name(callback.info.nickname)
      user = User.new
      user.name = callback.info.nickname
      user.realname = callback.info.name
      user.email = callback.info.email
      user.role = 'inactive'
      user.oauth = 'gh'
      user.password_digest = 'salasana'
      user.save
    end
    payload = {:user => callback.info.nickname}
    cookies['auth_token'] = JsonWebToken.encode(payload)
    redirect_to root_path
  end

  def get_authenticated_user
    authenticate_request
    @current_user
  end

end