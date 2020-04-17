Rails.application.routes.draw do
  
  root 'home#index'    #Si me requestean "GET /" me abre esto
  match '*path', to: 'home#index', via: :all
  
  # Post Requests
  post 'search', to: 'home#search'
  
end