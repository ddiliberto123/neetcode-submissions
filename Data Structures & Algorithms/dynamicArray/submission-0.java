class DynamicArray {

    private int[] arr;
    private int lastElement;
    private int capacity;

    public DynamicArray(int capacity) {
        arr = new int[capacity];
        lastElement = -1;
        this.capacity = capacity;
    }

    public int get(int i) {
        return arr[i];
    }

    public void set(int i, int n) {
        arr[i] = n;
    }

    public void pushback(int n) {
        this.lastElement++;
        if (this.lastElement >= this.capacity)
            this.resize();
        this.arr[this.lastElement] = n;
    }

    public int popback() {
        return this.arr[this.lastElement--];
    }

    private void resize() {
        capacity *= 2;
        int[] temp = new int[capacity];
        for (int i = 0; i < arr.length; i++)
            temp[i] = arr[i];
        arr = temp;
    }

    public int getSize() {
        return this.lastElement + 1;
    }

    public int getCapacity() {
        return this.capacity;
    }
}
