class LayerLayerTypeJoinTable < ActiveRecord::Migration[5.1]
  def change
    create_join_table :layers, :layer_types do |t|
      # t.index [:layer_id, :layer_type_id]
      # t.index [:layer_type_id, :layer_id]
    end
  end
end
