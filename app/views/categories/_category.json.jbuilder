json.(category, :id, :name, :layer_id, :created_at, :updated_at)
json.(category.publications, :ids)

json.url category_url(category, format: :json)
