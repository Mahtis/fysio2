class CreateDatabase < ActiveRecord::Migration[5.1]
  def change
    create_table :layers do |t|
      t.string :name

      t.timestamps null: false
    end
    create_table :categories do |t|
      t.string :name
      t.integer :layer_id

      t.timestamps null: false
    end
    create_table :publications do |t|
      t.string :name
      t.string :abstract
      t.integer :year
      t.string :journal

      t.timestamps null: false
    end
    create_table :authors do |t|
      t.string :name

      t.timestamps null: false
    end
    create_table :links do |t|
      t.string :url
      t.integer :publication_id
      t.string :link_type

      t.timestamps null: false
    end
    create_join_table :publications, :categories do |t|
      # t.index [:publication_id, :category_id]
      # t.index [:category_id, :publication_id]
    end
    create_join_table :publications, :authors do |t|
      # t.index [:publication_id, :author_id]
      # t.index [:author_id, :publication_id]
    end
  end
end
