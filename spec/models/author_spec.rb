require 'rails_helper'

RSpec.describe Author, type: :model do
  describe "Association" do
    it { should  have_and_belong_to_many(:publications) }
  end
  describe "Validation" do
    it { should  validate_presence_of(:name) }
  end
end
