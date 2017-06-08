require 'rails_helper'

RSpec.describe Publication, type: :model do
  describe "Associations" do
    it { should have_many(:links) }
    it { should have_and_belong_to_many(:authors) }
    it { should have_and_belong_to_many(:categories) }
  end
  describe "Validations" do
    it { should validate_presence_of(:name) }
  end
end
