Rails.application.routes.draw do
  get 'landing/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :messages, only: [:new, :create]

  root 'landing#index'
end
