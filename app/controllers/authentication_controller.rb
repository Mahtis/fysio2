class AuthenticationController < ApplicationController
  #skip_before_action :authenticate_request

  def authenticate
    command = AuthenticateUser.call(params[:name], params[:email])

    if command.success?
      render json: { auth_token: command.result }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end

  def create_oauth
    callback = request.env['omniauth.auth']
    payload = {:user => callback.info.nickname, :github_client => ENV['GITHUB_KEY'] }
    cookies['auth_token'] = JsonWebToken.encode(payload)
    redirect_to root_path
  end

  def get_authenticated_user
    authenticate_request
    @current_user
  end

end