module API
  class TimersController < ApplicationController
    def load
      render json: { 
        timer: {
        seconds: 0,
        minutes: 0,
        hours: 0,
        running: false
      }}
    end

    def start
      render json: { data: 'starttimerrrr' }
    end

    def stop
      render json: { seconds: params[:seconds], minutes: params[:minutes], hours: params[:hours] }
    end

  end
end