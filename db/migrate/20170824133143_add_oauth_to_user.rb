class AddOauthToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :oauth, :string
    User.all do |u|
      u.oauth = ''
    end
  end
end
