class FixColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :links, :url, :link_url
  end
end
