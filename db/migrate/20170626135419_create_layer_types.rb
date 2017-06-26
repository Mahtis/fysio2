class CreateLayerTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :layer_types do |t|
      t.string :name

      t.timestamps
    end
  end
end
