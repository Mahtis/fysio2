require "rails_helper"

RSpec.describe LayerTypesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/layer_types").to route_to("layer_types#index")
    end

    it "routes to #new" do
      expect(:get => "/layer_types/new").to route_to("layer_types#new")
    end

    it "routes to #show" do
      expect(:get => "/layer_types/1").to route_to("layer_types#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/layer_types/1/edit").to route_to("layer_types#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/layer_types").to route_to("layer_types#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/layer_types/1").to route_to("layer_types#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/layer_types/1").to route_to("layer_types#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/layer_types/1").to route_to("layer_types#destroy", :id => "1")
    end

  end
end
