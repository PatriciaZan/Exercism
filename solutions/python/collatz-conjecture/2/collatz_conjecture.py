def steps(number):
    result = 0
    step_count = 0

    recived_number = number

    if number <= 0:
        raise ValueError("Only positive integers are allowed")
    
    while recived_number > 1:
        if recived_number % 2 == 0:
            result = recived_number / 2
            step_count = step_count + 1
            recived_number = result
        else:
            result = (recived_number * 3) + 1
            step_count = step_count + 1
            recived_number = result 

        
    return step_count


steps(12)