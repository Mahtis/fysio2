require 'rails_helper'

RSpec.describe Layer, type: :model do
  describe "Assosiations" do
    it { (should have_many(:categories)) }
  end
  describe "Validations" do
    it { (should validate_presence_of(:name)) }
  end
end
