class Author < ActiveRecord::Base
  has_and_belongs_to_many(:publications)
  validates_presence_of(:name)
end
