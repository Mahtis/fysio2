class Publication < ActiveRecord::Base
  has_and_belongs_to_many(:authors)
  has_many(:links)
  has_and_belongs_to_many(:categories)
  accepts_nested_attributes_for :links
  validates_presence_of(:name)
end