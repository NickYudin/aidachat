Rails.application.routes.draw do
  get "ai_chats/index"
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  root "chats#index"
  resources :chats, only: [ :create ]
  resources :ai_chats, path: 'ai' do
    member do
      post :ask
    end
  end
end
