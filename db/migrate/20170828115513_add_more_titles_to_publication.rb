class AddMoreTitlesToPublication < ActiveRecord::Migration[5.1]
  def change
    add_column :publications, :moreTitles, :string
    Publication.find_each do |ca|
      ca.save!
    end
  end
end
