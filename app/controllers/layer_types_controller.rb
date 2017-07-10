class LayerTypesController < ApplicationController
  before_action :set_layer_type, only: %i[show edit update destroy]

  # GET /layer_types
  # GET /layer_types.json
  def index
    @layer_types = LayerType.all
  end

  # GET /layer_types/1
  # GET /layer_types/1.json
  def show; end

  # GET /layer_types/new
  def new
    @layer_type = LayerType.new
  end

  # GET /layer_types/1/edit
  def edit; end

  # POST /layer_types
  # POST /layer_types.json
  def create
    @layer_type = LayerType.new(layer_type_params)

    respond_to do |format|
      if @layer_type.save
        format.html { redirect_to @layer_type, notice: 'Layer type was successfully created.' }
        format.json { render :show, status: :created, location: @layer_type }
      else
        format.html { render :new }
        format.json { render json: @layer_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /layer_types/1
  # PATCH/PUT /layer_types/1.json
  def update
    respond_to do |format|
      if @layer_type.update(layer_type_params)
        format.html { redirect_to @layer_type, notice: 'Layer type was successfully updated.' }
        format.json { render :show, status: :ok, location: @layer_type }
      else
        format.html { render :edit }
        format.json { render json: @layer_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /layer_types/1
  # DELETE /layer_types/1.json
  def destroy
    @layer_type.destroy
    respond_to do |format|
      format.html { redirect_to layer_types_url, notice: 'Layer type was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_layer_type
    @layer_type = LayerType.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def layer_type_params
    params.require(:layer_type).permit(:name)
  end
end
