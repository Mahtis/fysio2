require 'rails_helper'

RSpec.describe "layer_types/new", type: :view do
  before(:each) do
    assign(:layer_type, LayerType.new(
      :name => "MyString"
    ))
  end

  it "renders new layer_type form" do
    render

    assert_select "form[action=?][method=?]", layer_types_path, "post" do

      assert_select "input[name=?]", "layer_type[name]"
    end
  end
end
