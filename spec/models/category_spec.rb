require 'rails_helper'

RSpec.describe Category, type: :model do
  describe "Associations" do
    it { should belong_to(:layer) }
  end
  describe "Validations" do
  # ensure column name is present before saving
  it { should validate_presence_of(:name) }
    end
end
