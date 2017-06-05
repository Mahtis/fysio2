Rails.application.routes.draw do
  resources :links
  resources :authors
  resources :publications
  resources :users
  resources :categories
  resources :layers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
