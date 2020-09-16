- Referred video : `/01_Programming/00_course/01_fireship/03_Graph Search Algorithms in 100 Seconds - And Beyond with JS.mp4`

## Overview
Graph : non-linear data structure containing nodes and edges.
- Node (vertex) : single (unique) value.
- Edge : connection (relationship) between 2 nodes

- 2 types of graph :
    1. Directed graph : goes 1 way. (Follower-followee type)
    2. Undirected graph : goes both way (Social network)

- Graph can be weighted (weighted graph) : edges contain meaning (values). 
- A node point to itself represent a cycle.

### Representing a graph
1. 2D array (Adjacency matrix). There is a row and column for every node. 
Input value 1, 0 indicate if 2 nodes are connected based on the row and column.

    - Pros:
        - Easy and fast for looking at a specific edge or adding a new edge
    - Cons: 
        - Quadratic space complexity. and quadratic time to add a new node

2. Adjacency list. Each item has an array directed to its neighbor.

    - Pros:
        - Fast to interate a node's edges
        - Efficient memory (for many nodes with few edges)

### Traversing a graph
1. Breadth-first search 
    ```python
    let Q = [r]

    while Q not empty:
        n = Q.dequeue()

        for v of N.children:
            Q.enqueue()
    ```
    - For each node, add its directed childrens to a queue and do the same for the not-yet-visited childrens.
    - Get all the possible solution to reach a goal, can compare and get a more efficient way to the goal.

2. Dept-first search
    ```python
    fun visit(N):
        if N not visited:
            visit(N)
    ```
    - Starts with a node, visit its first child and again go to its first child until there are no more children-node left to visit then backtrack the last node and repeat using recursive function.
    - Can ignore other possible solutions, and no need to go through every solution.


### Time complexity of BFS & DFS
- V : Nodes or Vertices 
- E : Edges

Time complexity : O(V+E) : O(N). 
> Scale linear according to the number of nodes and vertices.