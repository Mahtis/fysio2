class MoveDescriptonsToModal < ActiveRecord::Migration[5.1]
  def change
    add_column :publications, :moreTitles, :string
    class MoveDescriptonsToModal < ActiveRecord::Migration[5.1]
      def change
        add_column :publications, :moreTitles, :string
        Publication.find_each do |ca|
          ca.moreTitles = 'testin'
          ca.save!
        end

      end
    end
  end
end
