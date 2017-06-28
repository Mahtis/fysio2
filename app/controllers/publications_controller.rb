class PublicationsController < ApplicationController
  before_action :set_publication, only: [:show, :edit, :update, :destroy]

  # GET /publications
  # GET /publications.json
  def index
    parametersarray = Array.new
    params[:names].nil? ? parametersarray  : params[:names].each {|p| parametersarray << p}
    parametersarray.empty? ? @publications = Publication.all : @publications = self.getselectedpublications(parametersarray)
  end

  def getselectedpublications(parametersarray)
    categories = Category.all
    result = Publication
                 .all
                 .includes(:categories)
                 .where('categories.name = ?', parametersarray[0])
                 .references(:categories)
    publications = []
    result.each do |r|
      index = 0
      currentpublication = Publication.find(r.id)
      parametersarray.each do |p|
        currentpublication.categories.include?(categories.find_by(name: p)) ? index = index + 1 : index
      end
      parametersarray.size == index ? publications << currentpublication : publications
    end
    publications.each do |p|
      puts "BBBBB"
      puts p.inspect
    end
    return publications
  end


  # GET /publications/1
  # GET /publications/1.json
  def show
  end

  # GET /publications/new
  def new
    @publication = Publication.new
  end

  # GET /publications/1/edit
  def edit
  end

  # POST /publications
  # POST /publications.json
  def create
    @publication = Publication.new(publication_params)

    respond_to do |format|
      if @publication.save
        format.html { redirect_to @publication, notice: 'Publication was successfully created.' }
        format.json { render :show, status: :created, location: @publication }
      else
        format.html { render :new }
        format.json { render json: @publication.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /publications/1
  # PATCH/PUT /publications/1.json
  def update
    respond_to do |format|
      if @publication.update(publication_params)
        format.html { redirect_to @publication, notice: 'Publication was successfully updated.' }
        format.json { render :show, status: :ok, location: @publication }
      else
        format.html { render :edit }
        format.json { render json: @publication.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /publications/1
  # DELETE /publications/1.json
  def destroy
    @publication.destroy
    respond_to do |format|
      format.html { redirect_to publications_url, notice: 'Publication was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_publication
      @publication = Publication.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def publication_params
      params.require(:publication).permit(:name, :abstract, :year, :journal)
    end
end
