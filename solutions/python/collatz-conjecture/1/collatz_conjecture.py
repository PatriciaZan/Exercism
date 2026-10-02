def steps(number):
    result = 0
    stepCount = 0

    recivedNumber = number

    if number <= 0:
        raise ValueError("Only positive integers are allowed")
    
    while recivedNumber > 1:
        if recivedNumber % 2 == 0:
            result = recivedNumber / 2
            stepCount = stepCount + 1
            recivedNumber = result
        else:
            result = (recivedNumber * 3) + 1
            stepCount = stepCount + 1
            recivedNumber = result 

        
    return stepCount


steps(12)