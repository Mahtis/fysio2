class PublicationsController < ApplicationController
  before_action :set_publication, only: %i[show edit update destroy]

  # GET /publications
  # GET /publications.json
  def index
    if params[:names].nil?
        @publications = Publication.all
      elsif params[:names].empty?
        @publications = Publication.all
      else
        parr = []
        params[:names].each { |p| parr << p }
        @publications = getselectedpublications(Publication.all
                                                    .includes(:categories)
                                                    .where('categories.name = ?',
                                                           parr[0])
                                                    .references(:categories),
                                                parr,
                                                Category.all,
                                                [])
      end

  end

  def getselectedpublications(result, parametersarray, categories, publications)
    result.each do |r|
      index = 0
      parametersarray.each do |p|
        if Publication.find(r.id).categories
                      .include?(categories.find_by(name: p))
          index += 1
        end
      end
      if parametersarray.size.equal? index
        publications << Publication.find(r.id)
      end
    end

    publications

  end

  # GET /publications/1
  # GET /publications/1.json

  def show; end

  # GET /publications/new
  def new
    @publication = Publication.new
    @categories = Category.all
    @layers = Layer.all
    @layerCategories = Hash.new

    Layer.all.map{|l| @layerCategories[l] = Category.all
        .includes(:layer)
        .where('layer_id = ?', l.id)
        .references(:layers)}

  end

  # GET /publications/1/edit
  def edit; end

  # POST /publications
  # POST /publications.json
  def create
    puts publication_params.inspect
    pb = publication_params
    cats = []
    authors = []
    pb['categories'].each do |c|

      cats.push(Category.find(c))

    end
    pb['authors'].each do |a|
      author = Author.find_by name: a
      if author.nil?
        param = Hash["name" => a]
        @author = Author.new(param)
        @author.save
        authors.push(@author)
      else
        authors.push(author)
      end

    end

    pb[:categories] = cats
    pb[:authors] = authors

    @publication = Publication.new(pb)

    respond_to do |format|
      if @publication.save
        format.html { redirect_to '/', notice: 'PublicationTitle was successfully created.' }
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
        format.html { redirect_to @publication, notice: 'PublicationTitle was successfully updated.' }
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
      format.html { redirect_to publications_url, notice: 'PublicationTitle was successfully destroyed.' }
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
    params.require(:publication).permit(:name, :abstract, :year, :journal, :categories => [], :authors => [], :links_attributes => [:id, :link_url, :link_type])
  end
end
