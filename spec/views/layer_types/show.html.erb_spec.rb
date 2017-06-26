require 'rails_helper'

RSpec.describe "layer_types/show", type: :view do
  before(:each) do
    @layer_type = assign(:layer_type, LayerType.create!(
      :name => "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
  end
end
