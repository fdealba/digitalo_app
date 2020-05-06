Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    get 'load_timer', to: 'timers#load'
    post 'start_timer', to: 'timers#start'
    post 'stop_timer', to: 'timers#stop'
  end

  root 'home#index'    #Si me requestean "GET /" me abre esto
  get '*path' => redirect('/')
  
  # Post Requests

end