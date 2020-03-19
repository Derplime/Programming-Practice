# Draws a square spiral but slightly off
import turtle

# Make a turtle pen object
t = turtle.Pen()
for x in range(100):
    t.forward(x)
    t.left(100)
