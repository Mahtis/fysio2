class Category < ActiveRecord::Base
  belongs_to(:layer)
  has_and_belongs_to_many(:publications)
  validates_presence_of(:name)
  validates_presence_of(:layer_id)
end
