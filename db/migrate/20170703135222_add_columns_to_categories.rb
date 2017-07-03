class AddColumnsToCategories < ActiveRecord::Migration[5.1]
  def change
    add_column :categories, :description, :string
    add_column :categories, :infolink, :string
    Category.find_each do |ca|
      ca.description = "test"
      ca.infolink = "http://localhost"
      ca.save!
      end
    end
end
