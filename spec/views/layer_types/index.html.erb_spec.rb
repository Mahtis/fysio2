require 'rails_helper'

RSpec.describe "layer_types/index", type: :view do
  before(:each) do
    assign(:layer_types, [
      LayerType.create!(
        :name => "Name"
      ),
      LayerType.create!(
        :name => "Name"
      )
    ])
  end

  it "renders a list of layer_types" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
  end
end
