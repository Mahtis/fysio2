class AddRealNameToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :realname, :string
    User.all do |u|
      u.realname = ''
    end
  end
end
