json.(category, :id, :name, :layer_id, :description, :infolink, :created_at, :updated_at)
json.(category.publications, :ids)

json.url category_url(category, format: :json)
