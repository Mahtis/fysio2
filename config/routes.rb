Rails.application.routes.draw do
  resources :layer_types
  root 'index#index'
  resources :links
  resources :authors
  resources :publications
  resources :users
  resources :categories
  resources :layers
  post 'authenticate', to: 'authentication#authenticate'
  get 'auth/:provider/callback/', to: 'authentication#create_oauth'
  get 'auth/current_user/', to: 'authentication#get_authenticated_user'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #handle all the rest in routers in App.js
  get '*path' => 'index#index'

end
