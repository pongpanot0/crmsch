import numpy as np
from sklearn.linear_model import LinearRegression

# create some sample data
X = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
y = np.array([4, 5, 6])

# create a linear regression model
model = LinearRegression()

# train the model
model.fit(X, y)

# make a prediction
prediction = model.predict([[10, 11, 12]])

print(prediction)
