class LayerType < ApplicationRecord
  has_and_belongs_to_many(:layers)
end
