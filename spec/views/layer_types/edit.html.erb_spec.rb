require 'rails_helper'

RSpec.describe "layer_types/edit", type: :view do
  before(:each) do
    @layer_type = assign(:layer_type, LayerType.create!(
      :name => "MyString"
    ))
  end

  it "renders the edit layer_type form" do
    render

    assert_select "form[action=?][method=?]", layer_type_path(@layer_type), "post" do

      assert_select "input[name=?]", "layer_type[name]"
    end
  end
end
