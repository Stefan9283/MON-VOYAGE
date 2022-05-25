package MonVoyage.utils;

public class Pair<K, E> {
    private final K key;
    private final E value;

    public Pair(K key, E value) {
        this.key = key;
        this.value = value;
    }

    public K getKey() {
        return key;
    }
    public E getValue() {
        return value;
    }
}
