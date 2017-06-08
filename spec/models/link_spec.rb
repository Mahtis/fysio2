require 'rails_helper'

RSpec.describe Link, type: :model do
  describe "Associations" do
    it { should belong_to(:publication) }
  end
  describe "Validations" do
    it { should validate_presence_of(:url) }
    it { should validate_presence_of(:link_type) }
  end
end
