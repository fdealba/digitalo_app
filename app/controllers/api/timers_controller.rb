module API
  class TimersController < ApplicationController
    def load
      render json: { data: 'is there any data for timers?'}
    end

    def start
      render json: { data: 'starttimerrrr' }
    end

    def stop
      render json: { data: 'stoppppptimerrr'}
    end

  end
end