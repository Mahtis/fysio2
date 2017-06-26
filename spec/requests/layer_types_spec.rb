require 'rails_helper'

RSpec.describe "LayerTypes", type: :request do
  describe "GET /layer_types" do
    it "works! (now write some real specs)" do
      get layer_types_path
      expect(response).to have_http_status(200)
    end
  end
end
