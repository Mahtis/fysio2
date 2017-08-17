class AuthenticateUser
  prepend SimpleCommand

  def initialize(name, email)
    @name = name
    @email = email
  end

  def call
    JsonWebToken.encode(user_id: user.id) if user
  end

  private

  attr_accessor :name, :email

  def user
    user = User.find_by_email(email)
    return user if user

    errors.add :user_authentication, 'invalid credentials'
    nil
  end
end