Rails.application.routes.draw do
  # API
  namespace :api, defaults: { format: 'json' } do
    get 'load_timer', to: 'timers#load'
    post 'start_timer', to: 'timers#start'
    post 'stop_timer', to: 'timers#stop'
  end

  # Devise
  devise_for :user

  # ROOT
  root 'home#index'
  # get '*path' => redirect('/')
end