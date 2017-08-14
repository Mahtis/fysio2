class AddOrderToLayers < ActiveRecord::Migration[5.1]
  def change
    add_column :layers, :order, :integer
  end
end
