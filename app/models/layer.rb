class Layer < ActiveRecord::Base
  has_many(:categories)
  has_and_belongs_to_many(:layer_types)
  validates_presence_of(:name)
end
