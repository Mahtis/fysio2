require 'rails_helper'

RSpec.describe LayerType, type: :model do
  describe 'Associations' do
    it { (should have_and_belong_to_many(:layers)) }
  end
end
