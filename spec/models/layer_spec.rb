require 'rails_helper'

RSpec.describe Layer, type: :model do
  describe 'Associations' do
    it { (should have_many(:categories)) }
    it { (should have_and_belong_to_many(:layer_types))}
  end
  describe 'Validations' do
    it { (should validate_presence_of(:name)) }
  end
end
