class Link < ActiveRecord::Base
  belongs_to(:publication)
  validates_presence_of(:link_url)
  validates_presence_of(:link_type)
end
