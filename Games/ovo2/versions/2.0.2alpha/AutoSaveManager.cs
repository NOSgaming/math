using System.IO;
using UnityEngine;

public class AutoSaveManager : MonoBehaviour
{
    private string saveFilePath = "Assets/player_progress.json";

    // Assume you have a way to get the player's level
    private int currentLevel = 1;

    void Start()
    {
        LoadProgress();
    }

    void Update()
    {
        // Your game logic to update the level
        // For example, if player collects an item or reaches a milestone
        currentLevel++;

        // Automatically save progress
        if (Time.time % 10 == 0)  // Simulate periodic saving
        {
            SaveProgress();
        }
    }

    void SaveProgress()
    {
        string json = JsonUtility.ToJson(new { level = currentLevel });
        File.WriteAllText(saveFilePath, json);
        Debug.Log("Progress saved!");
    }

    void LoadProgress()
    {
        if (File.Exists(saveFilePath))
        {
            string json = File.ReadAllText(saveFilePath);
            var progress = JsonUtility.FromJson<Progress>(json);
            currentLevel = progress.level;
            Debug.Log("Loaded level: " + currentLevel);
        }
    }

    [System.Serializable]
    public class Progress
    {
        public int level;
    }
}
